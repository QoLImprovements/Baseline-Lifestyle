/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173868",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving-2-slices",
      "kind": "unit",
      "label": "serving 2 slices"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Lebanon bologna, beef",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.44,
    "energy_kcal": 172.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.15,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 330.0,
    "protein_g": 19.0,
    "salt_g": 3.425,
    "sat_fat_g": 2.79,
    "sodium_mg": 1370.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173868",
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
