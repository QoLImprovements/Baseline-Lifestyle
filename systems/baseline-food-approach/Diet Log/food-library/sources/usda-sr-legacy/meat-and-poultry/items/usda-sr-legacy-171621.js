/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-2-1-2-dia-x-1-4-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "slice-2-1-2-dia-x-1-4-thick",
      "kind": "unit",
      "label": "slice (2-1/2\" dia x 1/4\" thick)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Braunschweiger (a liver sausage), pork",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.1,
    "energy_kcal": 327.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 11.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 199.0,
    "protein_g": 14.5,
    "salt_g": 2.4425,
    "sat_fat_g": 9.31,
    "sodium_mg": 977.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4220.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171621",
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
