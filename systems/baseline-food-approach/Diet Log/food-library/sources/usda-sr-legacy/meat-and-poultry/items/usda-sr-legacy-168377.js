/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "ribs",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 878.0,
      "key": "ribs",
      "kind": "unit",
      "label": "ribs"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork loin, fresh, backribs, bone-in, cooked-roasted, lean only",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 0.0,
    "energy_kcal": 255.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.96,
    "magnesium_mg": 17.0,
    "omega3_g": 0.118,
    "phosphorus_mg": 171.0,
    "potassium_mg": 249.0,
    "protein_g": 24.2,
    "salt_g": 0.245,
    "sat_fat_g": 6.22,
    "sodium_mg": 98.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168377",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
