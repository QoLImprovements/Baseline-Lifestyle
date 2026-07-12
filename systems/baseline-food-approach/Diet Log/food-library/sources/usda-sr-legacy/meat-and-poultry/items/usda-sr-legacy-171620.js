/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link-cooked",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "link-cooked",
      "kind": "unit",
      "label": "link cooked"
    }
  ],
  "name": "Bratwurst, pork, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 2.85,
    "energy_kcal": 333.0,
    "fat_g": 29.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.53,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 208.0,
    "potassium_mg": 348.0,
    "protein_g": 13.7,
    "salt_g": 2.115,
    "sat_fat_g": 10.0,
    "sodium_mg": 846.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171620",
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
