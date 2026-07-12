/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "slice",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "MORI-NU, Tofu, silken, soft",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 2.9,
    "energy_kcal": 231.0,
    "fat_g": 2.7,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.82,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 180.0,
    "protein_g": 4.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.357,
    "sodium_mg": 5.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174292",
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
