/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "roll-2-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "roll-2-1-2-dia",
      "kind": "unit",
      "label": "roll (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Rolls, dinner, egg",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 52.0,
    "energy_kcal": 1280.0,
    "fat_g": 6.4,
    "fibre_g": 3.7,
    "folate_ug": 184.0,
    "iron_mg": 3.52,
    "magnesium_mg": 25.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 101.0,
    "potassium_mg": 104.0,
    "protein_g": 9.5,
    "salt_g": 1.415,
    "sat_fat_g": 1.58,
    "sodium_mg": 566.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175027",
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
