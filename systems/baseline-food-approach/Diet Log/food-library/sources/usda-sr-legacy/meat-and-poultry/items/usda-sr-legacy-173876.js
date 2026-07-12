/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "Pork sausage, link/patty, fully cooked, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.69,
    "energy_kcal": 1640.0,
    "fat_g": 37.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.92,
    "magnesium_mg": 13.0,
    "omega3_g": 0.281,
    "phosphorus_mg": 164.0,
    "potassium_mg": 211.0,
    "protein_g": 13.5,
    "salt_g": 2.025,
    "sat_fat_g": 12.1,
    "sodium_mg": 810.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173876",
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
