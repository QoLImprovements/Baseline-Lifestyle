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
  "id": "usda-sr-legacy-173870",
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
      "gramsPerUnit": 18.0,
      "key": "slice-2-1-2-dia-x-1-4-thick",
      "kind": "unit",
      "label": "slice (2-1/2\" dia x 1/4\" thick)"
    }
  ],
  "name": "Liver sausage, liverwurst, pork",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 2.2,
    "energy_kcal": 1360.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 6.4,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 170.0,
    "protein_g": 14.1,
    "salt_g": 2.15,
    "sat_fat_g": 10.6,
    "sodium_mg": 860.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8310.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173870",
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
