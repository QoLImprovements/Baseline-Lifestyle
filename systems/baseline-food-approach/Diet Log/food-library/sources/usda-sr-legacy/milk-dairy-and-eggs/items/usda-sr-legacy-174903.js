/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Biscuits, plain or buttermilk, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 185.0,
    "carbs_g": 48.4,
    "energy_kcal": 1400.0,
    "fat_g": 12.1,
    "fibre_g": 1.8,
    "folate_ug": 52.0,
    "iron_mg": 2.05,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 470.0,
    "potassium_mg": 188.0,
    "protein_g": 7.3,
    "salt_g": 2.3875,
    "sat_fat_g": 2.79,
    "sodium_mg": 955.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174903",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
