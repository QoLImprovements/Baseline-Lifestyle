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
  "id": "usda-sr-legacy-172464",
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
  "name": "MORI-NU, Tofu, silken, lite extra firm",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 1.0,
    "energy_kcal": 159.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.79,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 57.0,
    "protein_g": 7.0,
    "salt_g": 0.245,
    "sat_fat_g": 0.116,
    "sodium_mg": 98.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172464",
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
