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
  "id": "usda-sr-legacy-172971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Pork sausage, link/patty, fully cooked, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.62,
    "energy_kcal": 1830.0,
    "fat_g": 41.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.95,
    "magnesium_mg": 15.0,
    "omega3_g": 0.327,
    "phosphorus_mg": 193.0,
    "potassium_mg": 225.0,
    "protein_g": 15.1,
    "salt_g": 2.475,
    "sat_fat_g": 13.6,
    "sodium_mg": 990.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172971",
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
