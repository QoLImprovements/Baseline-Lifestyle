/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Ready Brek and own brands. 40g oat cereal made up with 200g milk",
  "id": "cofid-current-11-793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, oat, instant, plain, fortified, cooked, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 323.0,
    "carbs_g": 14.2,
    "energy_kcal": 95.0,
    "fat_g": 2.5,
    "fibre_g": 2.0,
    "folate_ug": 36.0,
    "iron_mg": 2.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 145.0,
    "potassium_mg": 199.0,
    "protein_g": 4.9,
    "salt_g": 0.1,
    "sat_fat_g": 1.08,
    "sodium_mg": 40.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-793",
  "state": "Cooked",
  "subcategory": "AI",
  "tags": [
    "ai",
    "cooked",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
