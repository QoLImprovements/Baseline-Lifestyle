/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including Cheddars, Mini Cheddars, cheese melts and cheese savouries",
  "id": "cofid-current-11-821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, cheese flavoured",
  "nutritionPerBasis": {
    "calcium_mg": 263.0,
    "carbs_g": 53.2,
    "energy_kcal": 494.0,
    "fat_g": 28.1,
    "fibre_g": 4.5,
    "folate_ug": 35.0,
    "iron_mg": 2.08,
    "magnesium_mg": 34.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 249.0,
    "potassium_mg": 247.0,
    "protein_g": 10.5,
    "salt_g": 2.205,
    "sat_fat_g": 11.67,
    "sodium_mg": 882.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-821",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
