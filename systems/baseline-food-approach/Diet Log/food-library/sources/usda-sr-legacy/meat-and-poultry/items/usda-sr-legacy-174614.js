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
  "id": "usda-sr-legacy-174614",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 451.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    }
  ],
  "name": "Frankfurter, beef, heated",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.66,
    "energy_kcal": 322.0,
    "fat_g": 29.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.22,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 252.0,
    "protein_g": 11.7,
    "salt_g": 2.13,
    "sat_fat_g": 11.6,
    "sodium_mg": 852.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174614",
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
