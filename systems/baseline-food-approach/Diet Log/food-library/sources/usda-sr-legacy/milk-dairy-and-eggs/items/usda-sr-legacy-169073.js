/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "envelope",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "envelope",
      "kind": "unit",
      "label": "envelope"
    },
    {
      "gramsPerUnit": 7.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Beverage, instant breakfast powder, chocolate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 66.2,
    "energy_kcal": 353.0,
    "fat_g": 1.4,
    "fibre_g": 0.4,
    "folate_ug": 285.0,
    "iron_mg": 12.8,
    "magnesium_mg": 228.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 427.0,
    "potassium_mg": 947.0,
    "protein_g": 19.9,
    "salt_g": 0.9625,
    "sat_fat_g": 0.56,
    "sodium_mg": 385.0,
    "sugar_g": 65.8,
    "vitamin_a_ug": 625.0,
    "vitamin_c_mg": 76.9,
    "vitamin_e_mg": 9.37,
    "vitamin_k_ug": 90.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169073",
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
