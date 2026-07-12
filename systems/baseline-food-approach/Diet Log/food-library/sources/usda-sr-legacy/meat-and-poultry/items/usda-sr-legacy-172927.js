/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-8-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172927",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-slices",
      "kind": "unit",
      "label": "2 slices"
    }
  ],
  "name": "Pastrami, turkey",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.34,
    "energy_kcal": 580.0,
    "fat_g": 6.21,
    "fibre_g": 0.1,
    "folate_ug": 5.0,
    "iron_mg": 4.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 200.0,
    "potassium_mg": 345.0,
    "protein_g": 16.3,
    "salt_g": 2.8,
    "sat_fat_g": 1.4,
    "sodium_mg": 1120.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172927",
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
