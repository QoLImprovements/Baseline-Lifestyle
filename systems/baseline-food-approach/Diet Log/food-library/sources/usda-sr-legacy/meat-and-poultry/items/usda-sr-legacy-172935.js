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
  "id": "usda-sr-legacy-172935",
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
      "gramsPerUnit": 26.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Salami, cooked, beef",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.9,
    "energy_kcal": 261.0,
    "fat_g": 22.2,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 2.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 188.0,
    "protein_g": 12.6,
    "salt_g": 2.85,
    "sat_fat_g": 9.86,
    "sodium_mg": 1140.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172935",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
