/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-328637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "shredded",
      "kind": "unit",
      "label": "shredded"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Cheese, cheddar",
  "nutritionPerBasis": {
    "calcium_mg": 707.0,
    "carbs_g": 2.44,
    "energy_kcal": 408.0,
    "fat_g": 34.0,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 0.16,
    "magnesium_mg": 26.8,
    "omega3_g": 0.145,
    "phosphorus_mg": 458.0,
    "potassium_mg": 77.0,
    "protein_g": 23.3,
    "salt_g": 1.635,
    "sat_fat_g": 19.2,
    "sodium_mg": 654.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 316.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "328637",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
