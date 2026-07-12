/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-167685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "slice-thick",
      "kind": "unit",
      "label": "slice, thick"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-medium",
      "kind": "unit",
      "label": "slice, medium"
    }
  ],
  "name": "Bologna, beef and pork, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.6,
    "energy_kcal": 962.0,
    "fat_g": 19.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.66,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 156.0,
    "protein_g": 11.5,
    "salt_g": 2.775,
    "sat_fat_g": 7.31,
    "sodium_mg": 1110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167685",
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
