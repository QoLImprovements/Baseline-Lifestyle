/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-167683",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Frozen novelties, ice cream type, vanilla ice cream, light, no sugar added, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 222.0,
    "carbs_g": 26.1,
    "energy_kcal": 221.0,
    "fat_g": 10.1,
    "fibre_g": 0.8,
    "folate_ug": 7.0,
    "iron_mg": 0.29,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 305.0,
    "protein_g": 6.4,
    "salt_g": 0.26,
    "sat_fat_g": 5.53,
    "sodium_mg": 104.0,
    "sugar_g": 8.52,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167683",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
