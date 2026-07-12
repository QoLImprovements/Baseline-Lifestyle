/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-slices",
      "kind": "unit",
      "label": "2 slices"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz-4-x-4-x-3-32-thick",
      "kind": "unit",
      "label": "slice (1 oz) (4\" x 4\" x 3/32\" thick)"
    }
  ],
  "name": "Luxury loaf, pork",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.9,
    "energy_kcal": 590.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.05,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 185.0,
    "potassium_mg": 377.0,
    "protein_g": 18.4,
    "salt_g": 3.05,
    "sat_fat_g": 1.58,
    "sodium_mg": 1220.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172931",
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
