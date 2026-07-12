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
  "id": "usda-sr-legacy-174586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Sausage, Italian, pork, mild, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.86,
    "energy_kcal": 324.0,
    "fat_g": 26.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.25,
    "magnesium_mg": 19.0,
    "omega3_g": 0.214,
    "phosphorus_mg": 152.0,
    "potassium_mg": 339.0,
    "protein_g": 18.4,
    "salt_g": 2.0025,
    "sat_fat_g": 9.03,
    "sodium_mg": 801.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174586",
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
