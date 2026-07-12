/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sausage-7-8-dia-x-2-long",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "sausage-7-8-dia-x-2-long",
      "kind": "unit",
      "label": "sausage (7/8\" dia x 2\" long)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "7-sausages-drained-contents-from-can-net-wt-4-oz",
      "kind": "unit",
      "label": "7 sausages (drained contents from can, net wt 4 oz)"
    }
  ],
  "name": "Sausage, Vienna, canned, chicken, beef, pork",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.6,
    "energy_kcal": 962.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.88,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 101.0,
    "protein_g": 10.5,
    "salt_g": 2.1975,
    "sat_fat_g": 7.12,
    "sodium_mg": 879.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172942",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
