/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frankfurter",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-168131",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Frankfurter, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.8,
    "energy_kcal": 312.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.43,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 166.0,
    "protein_g": 12.0,
    "salt_g": 0.7775,
    "sat_fat_g": 12.0,
    "sodium_mg": 311.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168131",
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
