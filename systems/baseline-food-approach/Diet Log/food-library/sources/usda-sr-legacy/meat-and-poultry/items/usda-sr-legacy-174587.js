/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-4-dia-x-1-8-thick",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "slice-4-dia-x-1-8-thick",
      "kind": "unit",
      "label": "slice (4\" dia x 1/8\" thick)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Luncheon sausage, pork and beef",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.58,
    "energy_kcal": 1090.0,
    "fat_g": 20.9,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.43,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 245.0,
    "protein_g": 15.4,
    "salt_g": 2.95,
    "sat_fat_g": 7.62,
    "sodium_mg": 1180.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174587",
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
