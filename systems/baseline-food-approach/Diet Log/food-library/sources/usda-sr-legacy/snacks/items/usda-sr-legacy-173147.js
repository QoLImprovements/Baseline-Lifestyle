/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-173147",
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
      "gramsPerUnit": 262.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    }
  ],
  "name": "Snacks, pita chips, salted",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 68.3,
    "energy_kcal": 1910.0,
    "fat_g": 15.2,
    "fibre_g": 3.8,
    "folate_ug": 135.0,
    "iron_mg": 4.59,
    "magnesium_mg": 37.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 124.0,
    "potassium_mg": 129.0,
    "protein_g": 11.8,
    "salt_g": 2.135,
    "sat_fat_g": 1.34,
    "sodium_mg": 854.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.93,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173147",
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
