/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bar, GENERAL MILLS, NATURE VALLEY, with yogurt coating",
  "nutritionPerBasis": {
    "calcium_mg": 286.0,
    "carbs_g": 74.3,
    "energy_kcal": 423.0,
    "fat_g": 11.4,
    "fibre_g": 4.4,
    "folate_ug": 126.0,
    "iron_mg": 1.03,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 168.0,
    "protein_g": 5.71,
    "salt_g": 0.6775,
    "sat_fat_g": 1.37,
    "sodium_mg": 271.0,
    "sugar_g": 40.0,
    "vitamin_a_ug": 475.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174802",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
