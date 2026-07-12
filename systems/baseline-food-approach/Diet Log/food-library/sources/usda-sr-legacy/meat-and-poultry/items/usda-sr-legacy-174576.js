/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-slices",
      "kind": "unit",
      "label": "2 slices"
    }
  ],
  "name": "Pickle and pimiento loaf, pork",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 8.46,
    "energy_kcal": 225.0,
    "fat_g": 16.0,
    "fibre_g": 1.5,
    "folate_ug": 37.0,
    "iron_mg": 1.33,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 371.0,
    "protein_g": 11.2,
    "salt_g": 2.6,
    "sat_fat_g": 5.29,
    "sodium_mg": 1040.0,
    "sugar_g": 8.46,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174576",
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
