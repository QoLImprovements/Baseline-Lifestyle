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
  "id": "usda-sr-legacy-174603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Salami, Italian, pork",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.2,
    "energy_kcal": 1780.0,
    "fat_g": 37.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 340.0,
    "protein_g": 21.7,
    "salt_g": 4.725,
    "sat_fat_g": 13.1,
    "sodium_mg": 1890.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174603",
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
