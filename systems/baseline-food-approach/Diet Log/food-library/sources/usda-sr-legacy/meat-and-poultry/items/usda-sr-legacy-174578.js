/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Pork sausage, link/patty, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.42,
    "energy_kcal": 1360.0,
    "fat_g": 27.2,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.169,
    "phosphorus_mg": 149.0,
    "potassium_mg": 342.0,
    "protein_g": 18.5,
    "salt_g": 2.035,
    "sat_fat_g": 8.83,
    "sodium_mg": 814.0,
    "sugar_g": 1.09,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174578",
  "state": "Fried",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "fried",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
