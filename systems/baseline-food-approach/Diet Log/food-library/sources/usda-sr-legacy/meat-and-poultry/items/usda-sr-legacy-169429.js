/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 214.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, grass-fed, strip steaks, lean only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 488.0,
    "fat_g": 2.69,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.85,
    "magnesium_mg": 23.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 212.0,
    "potassium_mg": 342.0,
    "protein_g": 23.1,
    "salt_g": 0.1375,
    "sat_fat_g": 1.03,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169429",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
