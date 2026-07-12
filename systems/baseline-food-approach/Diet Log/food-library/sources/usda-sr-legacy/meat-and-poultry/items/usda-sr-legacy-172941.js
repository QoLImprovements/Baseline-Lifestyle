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
  "id": "usda-sr-legacy-172941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Turkey breast, sliced, prepackaged",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.2,
    "energy_kcal": 106.0,
    "fat_g": 3.77,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 249.0,
    "potassium_mg": 371.0,
    "protein_g": 14.8,
    "salt_g": 2.245,
    "sat_fat_g": 0.906,
    "sodium_mg": 898.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172941",
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
