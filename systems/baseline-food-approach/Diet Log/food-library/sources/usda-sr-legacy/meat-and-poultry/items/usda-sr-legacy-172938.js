/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-3-1-8-dia-x-1-16-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172938",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "slice-3-1-8-dia-x-1-16-thick",
      "kind": "unit",
      "label": "slice (3-1/8\" dia x 1/16\" thick)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "package-4-oz",
      "kind": "unit",
      "label": "package (4 oz)"
    }
  ],
  "name": "Salami, dry or hard, pork",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.6,
    "energy_kcal": 1700.0,
    "fat_g": 33.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.3,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 378.0,
    "protein_g": 22.6,
    "salt_g": 5.65,
    "sat_fat_g": 11.9,
    "sodium_mg": 2260.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172938",
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
