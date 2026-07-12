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
  "id": "usda-foundation-1999630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soy milk, unsweetened, plain, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 1.29,
    "energy_kcal": 38.5,
    "fat_g": 2.12,
    "fibre_g": 0.0,
    "folate_ug": 19.7,
    "iron_mg": 0.542,
    "magnesium_mg": 21.5,
    "omega3_g": 0.166,
    "phosphorus_mg": 68.6,
    "potassium_mg": 158.0,
    "protein_g": 3.55,
    "salt_g": 0.08575,
    "sat_fat_g": 0.314,
    "sodium_mg": 34.3,
    "sugar_g": 0.557,
    "vitamin_a_ug": 58.2,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.156,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999630",
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
