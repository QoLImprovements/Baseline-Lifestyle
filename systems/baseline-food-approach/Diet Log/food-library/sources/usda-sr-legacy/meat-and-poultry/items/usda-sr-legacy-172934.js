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
  "id": "usda-sr-legacy-172934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Pork sausage, link/patty, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.93,
    "energy_kcal": 288.0,
    "fat_g": 24.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.02,
    "magnesium_mg": 15.0,
    "omega3_g": 0.149,
    "phosphorus_mg": 133.0,
    "potassium_mg": 307.0,
    "protein_g": 15.4,
    "salt_g": 1.8475,
    "sat_fat_g": 7.57,
    "sodium_mg": 739.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172934",
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
