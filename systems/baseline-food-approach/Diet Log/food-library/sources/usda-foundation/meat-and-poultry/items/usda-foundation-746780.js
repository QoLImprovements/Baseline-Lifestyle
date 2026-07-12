/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "medium",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-foundation-746780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.6,
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
  "name": "Sausage, Italian, pork, mild, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.15,
    "energy_kcal": 322.0,
    "fat_g": 26.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.29,
    "magnesium_mg": 18.6,
    "omega3_g": 0.207,
    "phosphorus_mg": 145.0,
    "potassium_mg": 310.0,
    "protein_g": 18.2,
    "salt_g": 1.915,
    "sat_fat_g": 9.15,
    "sodium_mg": 766.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746780",
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
