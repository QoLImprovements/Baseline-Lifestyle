/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products, frozen and chilled, all bases, not stuffed crust",
  "id": "cofid-current-11-936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, cheese and tomato, retail",
  "nutritionPerBasis": {
    "calcium_mg": 217.0,
    "carbs_g": 36.1,
    "energy_kcal": 272.0,
    "fat_g": 9.8,
    "fibre_g": 2.9,
    "folate_ug": 4.0,
    "iron_mg": 1.09,
    "magnesium_mg": 24.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 179.0,
    "potassium_mg": 223.0,
    "protein_g": 12.2,
    "salt_g": 0.9925,
    "sat_fat_g": 4.12,
    "sodium_mg": 397.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-936",
  "state": "Unspecified",
  "subcategory": "A",
  "tags": [
    "a",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
