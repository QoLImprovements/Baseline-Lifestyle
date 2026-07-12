/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "rack",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168307",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "rack",
      "kind": "unit",
      "label": "rack"
    }
  ],
  "name": "Pork, fresh, loin, country-style ribs, separable lean only, bone-in, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 227.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.98,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 235.0,
    "potassium_mg": 390.0,
    "protein_g": 29.2,
    "salt_g": 0.2275,
    "sat_fat_g": 3.77,
    "sodium_mg": 91.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168307",
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
