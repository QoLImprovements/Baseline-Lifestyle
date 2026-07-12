/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "envelope",
      "kind": "unit",
      "label": "envelope"
    }
  ],
  "name": "Beverage, instant breakfast powder, chocolate, sugar-free, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 41.0,
    "energy_kcal": 1500.0,
    "fat_g": 5.1,
    "fibre_g": 2.0,
    "folate_ug": 500.0,
    "iron_mg": 2.3,
    "magnesium_mg": 410.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 500.0,
    "potassium_mg": 1700.0,
    "protein_g": 35.8,
    "salt_g": 1.7925,
    "sat_fat_g": 2.16,
    "sodium_mg": 717.0,
    "sugar_g": 39.0,
    "vitamin_a_ug": 2690.0,
    "vitamin_c_mg": 138.0,
    "vitamin_e_mg": 16.9,
    "vitamin_k_ug": 120.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169897",
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
