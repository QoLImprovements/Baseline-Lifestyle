/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-25-block",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "0-25-block",
      "kind": "unit",
      "label": "0.25 block"
    }
  ],
  "name": "Tofu, hard, prepared with nigari",
  "nutritionPerBasis": {
    "calcium_mg": 345.0,
    "carbs_g": 4.39,
    "energy_kcal": 145.0,
    "fat_g": 9.99,
    "fibre_g": 0.6,
    "folate_ug": 22.0,
    "iron_mg": 2.75,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 231.0,
    "potassium_mg": 146.0,
    "protein_g": 12.7,
    "salt_g": 0.005,
    "sat_fat_g": 1.44,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174291",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
