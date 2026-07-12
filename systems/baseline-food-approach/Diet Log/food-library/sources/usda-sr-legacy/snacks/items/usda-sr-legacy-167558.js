/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bag",
  "description": "Snacks",
  "id": "usda-sr-legacy-167558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, tortilla chips, plain, white corn, salted",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 67.8,
    "energy_kcal": 472.0,
    "fat_g": 20.7,
    "fibre_g": 5.4,
    "folate_ug": 12.0,
    "iron_mg": 1.52,
    "magnesium_mg": 84.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 225.0,
    "potassium_mg": 182.0,
    "protein_g": 7.1,
    "salt_g": 0.82,
    "sat_fat_g": 2.81,
    "sodium_mg": 328.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 20.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167558",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
