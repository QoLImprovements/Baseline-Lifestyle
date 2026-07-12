/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-2257044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soy milk, sweetened, plain, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 3.0,
    "energy_kcal": 40.7,
    "fat_g": 1.96,
    "fibre_g": 0.0,
    "folate_ug": 15.8,
    "iron_mg": 0.367,
    "magnesium_mg": 17.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 118.0,
    "protein_g": 2.78,
    "salt_g": 0.0985,
    "sat_fat_g": 0.0,
    "sodium_mg": 39.4,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2257044",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "beverages",
    "legumes-and-legume-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
