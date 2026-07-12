/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link-3-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "link-3-oz",
      "kind": "unit",
      "label": "link 3 oz"
    }
  ],
  "name": "Sausage, Italian, sweet, links",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 2.1,
    "energy_kcal": 149.0,
    "fat_g": 8.42,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.19,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 194.0,
    "protein_g": 16.1,
    "salt_g": 1.425,
    "sat_fat_g": 3.26,
    "sodium_mg": 570.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172952",
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
