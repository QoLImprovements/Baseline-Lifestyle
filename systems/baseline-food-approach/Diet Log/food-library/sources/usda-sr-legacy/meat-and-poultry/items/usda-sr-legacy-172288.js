/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Babyfood, dinner, broccoli and chicken, junior",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 6.34,
    "energy_kcal": 62.0,
    "fat_g": 2.48,
    "fibre_g": 1.4,
    "folate_ug": 69.0,
    "iron_mg": 0.52,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 170.0,
    "protein_g": 3.59,
    "salt_g": 0.0425,
    "sat_fat_g": 0.51,
    "sodium_mg": 17.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 17.7,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 73.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172288",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
