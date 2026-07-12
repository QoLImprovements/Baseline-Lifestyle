/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-4-dia-x-1-8-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "slice-4-dia-x-1-8-thick",
      "kind": "unit",
      "label": "slice (4\" dia x 1/8\" thick)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice-2-3-4-dia-x-1-16",
      "kind": "unit",
      "label": "slice (2-3/4\" dia x 1/16\")"
    }
  ],
  "name": "Beerwurst, beer salami, pork",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.06,
    "energy_kcal": 996.0,
    "fat_g": 18.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.76,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 253.0,
    "protein_g": 14.2,
    "salt_g": 3.1,
    "sat_fat_g": 6.28,
    "sodium_mg": 1240.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171616",
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
