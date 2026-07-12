/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "long",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-foundation-746781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "long",
      "kind": "unit",
      "label": "long"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "ground",
      "kind": "unit",
      "label": "ground"
    },
    {
      "gramsPerUnit": 80.4,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Sausage, pork, chorizo, link or ground, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 2.63,
    "energy_kcal": 346.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.34,
    "magnesium_mg": 30.1,
    "omega3_g": 0.212,
    "phosphorus_mg": 207.0,
    "potassium_mg": 435.0,
    "protein_g": 19.3,
    "salt_g": 2.4575,
    "sat_fat_g": 9.45,
    "sodium_mg": 983.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746781",
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
