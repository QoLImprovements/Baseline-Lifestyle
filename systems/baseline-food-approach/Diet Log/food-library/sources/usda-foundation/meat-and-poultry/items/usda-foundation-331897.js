/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "with-skin",
  "description": "Poultry Products",
  "id": "usda-foundation-331897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "with-skin",
      "kind": "unit",
      "label": "with skin"
    },
    {
      "gramsPerUnit": 94.7,
      "key": "without-skin",
      "kind": "unit",
      "label": "without skin"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat only, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 652.0,
    "fat_g": 5.95,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.94,
    "magnesium_mg": 22.4,
    "omega3_g": 0.062,
    "phosphorus_mg": 184.0,
    "potassium_mg": 239.0,
    "protein_g": 23.9,
    "salt_g": 0.2925,
    "sat_fat_g": 1.6,
    "sodium_mg": 117.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "331897",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
