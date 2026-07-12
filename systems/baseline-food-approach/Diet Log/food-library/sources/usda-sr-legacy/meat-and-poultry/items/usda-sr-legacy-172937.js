/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Salami, cooked, turkey",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 1.55,
    "energy_kcal": 718.0,
    "fat_g": 9.21,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 1.25,
    "magnesium_mg": 22.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 266.0,
    "potassium_mg": 216.0,
    "protein_g": 19.2,
    "salt_g": 2.775,
    "sat_fat_g": 2.78,
    "sodium_mg": 1110.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172937",
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
