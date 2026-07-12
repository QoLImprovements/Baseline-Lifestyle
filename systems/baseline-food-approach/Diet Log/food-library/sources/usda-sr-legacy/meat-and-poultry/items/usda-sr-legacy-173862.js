/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 446.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "hot-dog",
      "kind": "unit",
      "label": "hot dog"
    }
  ],
  "name": "Frankfurter, beef, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.97,
    "energy_kcal": 315.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.12,
    "magnesium_mg": 11.0,
    "omega3_g": 0.093,
    "phosphorus_mg": 134.0,
    "potassium_mg": 364.0,
    "protein_g": 11.7,
    "salt_g": 2.1625,
    "sat_fat_g": 11.5,
    "sodium_mg": 865.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173862",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
