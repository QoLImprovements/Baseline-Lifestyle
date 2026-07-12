/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "11-crackers-1-nlea-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "11-crackers-1-nlea-serving",
      "kind": "unit",
      "label": "11 crackers (1 NLEA serving)"
    },
    {
      "gramsPerUnit": 3.1,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Crackers, cream, Gamesa Sabrosas",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 64.6,
    "energy_kcal": 484.0,
    "fat_g": 20.4,
    "fibre_g": 2.4,
    "folate_ug": 149.0,
    "iron_mg": 7.38,
    "magnesium_mg": 25.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 98.0,
    "potassium_mg": 129.0,
    "protein_g": 7.01,
    "salt_g": 2.875,
    "sat_fat_g": 5.36,
    "sodium_mg": 1150.0,
    "sugar_g": 9.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 17.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167530",
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
