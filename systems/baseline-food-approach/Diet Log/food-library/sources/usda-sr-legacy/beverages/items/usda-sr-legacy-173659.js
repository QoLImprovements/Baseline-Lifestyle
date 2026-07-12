/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-powder",
  "description": "Beverages",
  "id": "usda-sr-legacy-173659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "cup-powder",
      "kind": "unit",
      "label": "cup powder"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "scoop-powder",
      "kind": "unit",
      "label": "scoop powder"
    }
  ],
  "name": "Beverages, drink mix, QUAKER OATS, GATORADE, orange flavor, powder",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 94.1,
    "energy_kcal": 1620.0,
    "fat_g": 1.23,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.34,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 30.0,
    "protein_g": 0.0,
    "salt_g": 0.1575,
    "sat_fat_g": 0.0,
    "sodium_mg": 63.0,
    "sugar_g": 80.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173659",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
