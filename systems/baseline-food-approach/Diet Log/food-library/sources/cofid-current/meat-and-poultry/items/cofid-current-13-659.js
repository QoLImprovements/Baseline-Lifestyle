/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, soaked and boiled for 40-70 minutes",
  "id": "cofid-current-13-659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, red kidney, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 15.1,
    "energy_kcal": 100.0,
    "fat_g": 1.0,
    "fibre_g": 11.1,
    "folate_ug": 45.0,
    "iron_mg": 2.26,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 366.0,
    "protein_g": 8.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.2,
    "sodium_mg": 0.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-659",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
