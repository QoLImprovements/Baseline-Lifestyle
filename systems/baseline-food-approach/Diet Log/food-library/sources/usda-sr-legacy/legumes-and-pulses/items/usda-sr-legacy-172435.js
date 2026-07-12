/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peanut flour, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 31.3,
    "energy_kcal": 428.0,
    "fat_g": 21.9,
    "fibre_g": 15.8,
    "folate_ug": 133.0,
    "iron_mg": 4.74,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 508.0,
    "potassium_mg": 1360.0,
    "protein_g": 33.8,
    "salt_g": 0.0025,
    "sat_fat_g": 3.04,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172435",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
