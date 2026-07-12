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
  "id": "usda-foundation-746779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.6,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Sausage, breakfast sausage, beef, pre-cooked, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 3.37,
    "energy_kcal": 328.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.55,
    "magnesium_mg": 19.7,
    "omega3_g": 0.103,
    "phosphorus_mg": 124.0,
    "potassium_mg": 263.0,
    "protein_g": 13.3,
    "salt_g": 2.165,
    "sat_fat_g": 11.3,
    "sodium_mg": 866.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 19.2,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746779",
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
