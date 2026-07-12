/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171601",
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
      "gramsPerUnit": 23.0,
      "key": "slice-5-7-8-x-3-1-2-x-1-16",
      "kind": "unit",
      "label": "slice (5-7/8\" x 3-1/2\" x 1/16\")"
    }
  ],
  "name": "Barbecue loaf, pork, beef",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 6.4,
    "energy_kcal": 724.0,
    "fat_g": 8.9,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.16,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 329.0,
    "protein_g": 15.8,
    "salt_g": 3.325,
    "sat_fat_g": 3.17,
    "sodium_mg": 1330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171601",
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
